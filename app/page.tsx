"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./shared/button";
// import ButtonsContainer from "./components/buttonsContainer";
import { useEffect, useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const choices = ["paper", "rock", "scissors"];
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  // useEffect(() => {
  //   calcresult();
  // }, [selectedChoice, computerChoice]);

  const handleButtonClick = (buttonName: string) => {
    setResult("");
    setSelectedChoice(()=>buttonName);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(()=>choices[randomIndex]);

    
    if (choices[randomIndex] == buttonName) {
      setResult(() => "draw");
    } else if (
      (choices[randomIndex] == "paper" && buttonName == "scissors") ||
      (choices[randomIndex] == "scissors" && buttonName == "rock") ||
      (choices[randomIndex] == "rock" && buttonName == "paper")
    ) {
      setResult(() => "Win");
      setScore((prev) => prev + 1);
    } else {
      setResult(() => "Loss");
      setScore((prev) => prev  - 1);
    }

  };

 

  return (
    <main className={styles.main}>
      <div className={styles.score}>
        {score} {selectedChoice} {computerChoice} {result}
      </div>

      <div className={styles.container}></div>
      {/* <ButtonsContainer /> */}
      <div>
        <h1>Choose !!</h1>
        <div className={styles.buttonsContainer}></div>
        <Button text="Paper" onButtonClick={handleButtonClick} param="paper" />
        <Button text="Rock" onButtonClick={handleButtonClick} param="rock" />
        <Button
          text="Scissors"
          onButtonClick={handleButtonClick}
          param="scissors"
        />
      </div>
    </main>
  );
}
