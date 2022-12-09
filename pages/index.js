import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { ethers } from 'ethers';
import { setEns, setToken, setWalletId, setSignature } from '../helpers/state';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [LoginState, setLoginState] = useState();


  const Login = async () => {

    if (!window.ethereum) {
      setLoginState("Wallet Not Connected, Install Wallet Extension");
      return;
    }

    setLoginState("Fetching Wallet Address...");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    setWalletId(walletAddress);

    setLoginState("Fetching ENS.....");
    const ens = await provider.lookupAddress(walletAddress);
    setEns(ens);


    setLoginState("Generating Secret Key.....")

    const secretApi = await fetch("/api/auth/nonce", {
      method: "POST",
      body: JSON.stringify({
        walletAddress, ens
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const { secret } = await secretApi.json();
    console.log('backend secret', secret)

    setLoginState("Kindly sign the session key.....")
    
    const signature = await signer.signMessage(`Secret from backend: ${secret}`)
    setSignature(signature);
    console.log(signature);

    setLoginState("verifying signature.....")

    const walletApi = await fetch("/api/auth/wallet", {
      method: "POST",
      body: JSON.stringify({
        walletAddress, secret, signature
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });


    setLoginState("Loggin In....");

    const { user, token } = await walletApi.json();
    setToken(token);


    if (user && token) {
      router.push('/dashboard');
    } else {
      router.push('/')
    }

  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Hashmail FullStack App</title>
        <meta name="description" content="Hashmail FullStack App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your <a>Web3Dash</a>
        </h1>

        <>{LoginState}</>

        <div className={styles.grid}>
          <button onClick={Login} className={styles.card}>

            <h3><img className={styles.imgs} src='/wallet.png'/> Connect your wallet &rarr;</h3>
          </button>

        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Powered by{' '}
          <span className={styles.logo}>
            Adharsh RJ
          </span>
        </div>
      </footer>
    </div>
  )
}
