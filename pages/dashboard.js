import { useGlobalState, setToken, setSignature } from '../helpers/state';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { alchemyApiKey, ensContractAddress } from "../helpers/env"

function Dashboard() {
  const [token] = useGlobalState('token')

  useEffect(() => {
    // checks if the user is authenticated
    if (token) {
      router.push("/dashboard")
    }
    else {
      router.push("/")
    };

  }, []);


  const router = useRouter();
  const [walletAddress] = useGlobalState("WalletId");
  const [ens] = useGlobalState("ens");
  const [ensNFT, setEnsNFT] = useState();
  let ensTemp = [];
  ensTemp = [ens] ? (typeof ens == 'string') : ens
  let ensApiVal = ensTemp ? ensTemp : ["0xshah.eth"];
  const nftURL = `https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}/getNFTs/?owner=${ensApiVal[0]}`

  async function getEnsNFT() {

    // SSR Implementation
    // const alchemyApi = await fetch("/api/auth/alchemy", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     walletAddress, ensContractAddress, alchemyApiKey
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    // CSR Implementation
    await fetch(nftURL,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(async (res) => setEnsNFT(await res?.json()))

  }

  useEffect(() => {
    getEnsNFT()
  }, [ens])


  const LogOut = () => {
    setToken("")
    setSignature("")
    console.clear();
    router.push("/")
  }

  return (
    <>
        <button className={styles.signOut} onClick={LogOut}>
        Log out <img className={styles.imgs} src='/logout.png'/>
        </button>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3> Your wallet Address &rarr; </h3>
            <p>{walletAddress}</p>
          </div>
           { ensApiVal && <div className={styles.card}>
            <h3> Your ENS names &rarr; </h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td className={styles.td}><b>S.No.</b></td>
                  <td className={styles.td}><b>ENS name</b></td>
                </tr>
              </thead>
              <tbody>
              {ensApiVal?.map((value, i) => (
                  <tr>
                    <td className={styles.td}>{i + 1}</td>
                    <td className={styles.td}>{value}</td>
                  </tr>
                ))}
              </tbody>
          </table>
            <p>{ens}</p>
          </div>}
          {ensNFT && <div className={styles.card}>
            <h3> Your NFTS &rarr;</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td className={styles.td}><b>S.No.</b></td>
                  <td className={styles.td}><b>Token Id</b></td>
                  <td className={styles.td}><b>Title</b></td>
                  <td className={styles.td}><b>Image</b></td>
                  <td className={styles.td}><b>Contract Address</b></td>
                </tr>
              </thead>
              <tbody>
                {ensNFT?.ownedNfts.map((value, i) => (
                  <tr>
                    <td className={styles.td}>{i + 1}</td>
                    <td className={styles.td}>{value?.id?.tokenId}</td>
                    <td className={styles.td}>{value?.title}</td>
                    <td className={styles.td}><img className={styles.tableimg} src={value?.metadata?.image} alt={value.title} /></td>
                    <td className={styles.td}>{value?.contract?.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>}
        </div>

      </main>
    </>
  )
}

export default Dashboard;