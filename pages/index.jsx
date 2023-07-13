import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
     <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Golden Nomad's Dashboard</title>
        <link rel="icon" href="icon.ico">
    </head>
    <div id="testing">
        <nav>
            <div>
                <h1>Golden Nomad's Dashboard</h1>  
                <p>Kind Donation: <a>nomadubfhEHBAxe4fDFgt4x2Ur1UxraeWsTgMXxhTet</a></p>   
            </div> 
        </nav>
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
