<<<<<<< HEAD
import React, { useEffect } from "react";
import styles from "../../index.module.css";

import { setIsActiveFont } from "../../reducers/setBar/StyleElements";
=======
import { useEffect } from "react";

import { setIsActiveFont } from "../../reducers/setBar/StyleElements"
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../ReduxStore";

import "../../index.css";

type PopupProps = {
  close: () => void;
};

export function PopupFonts({ close }: PopupProps) {
<<<<<<< HEAD
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const popup = document.getElementById("popup") as HTMLDivElement;
    popup.style.display = "block";
  }, []);

=======

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const popup = document.getElementById("popup") as HTMLDivElement;
    popup.style.display = "block";
  }, [])
  
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  function closePopup(font: number) {
    close();
    dispatch(setIsActiveFont(font));
    const popup = document.getElementById("popup") as HTMLDivElement;
    popup.style.display = "none";
  }

  return (
<<<<<<< HEAD
    <div
      id="popup"
      className={`${styles.fonts} ${styles.popup}`}
    >
      <div className={styles.popupContent}>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(6);
          }}
        >
          6
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(7);
          }}
        >
          7
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(8);
          }}
        >
          8
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(9);
          }}
        >
          9
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(10);
          }}
        >
          10
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(11);
          }}
        >
          11
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(12);
          }}
        >
          12
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(14);
          }}
        >
          14
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(16);
          }}
        >
          16
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(18);
          }}
        >
          18
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(20);
          }}
        >
          20
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(22);
          }}
        >
          22
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(24);
          }}
        >
          24
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(26);
          }}
        >
          26
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(28);
          }}
        >
          28
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(32);
          }}
        >
          32
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(36);
          }}
        >
          36
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(40);
          }}
        >
          40
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(48);
          }}
        >
          48
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(56);
          }}
        >
          56
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(64);
          }}
        >
          64
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(72);
          }}
        >
          72
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(96);
          }}
        >
          96
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(128);
          }}
        >
          128
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(160);
          }}
        >
          160
        </button>
        <button
          className={styles.btnFont}
          onClick={() => {
            closePopup(192);
          }}
        >
          192
        </button>
=======
    <div id="popup" className="fonts popup" style={{ width: "80px", height: "215px", padding: "0" }}>
      <div className="popup-content">
        <button className="btn-font" onClick={() => { closePopup(6) }}>6</button>
        <button className="btn-font" onClick={() => { closePopup(7) }} >7</button>
        <button className="btn-font" onClick={() => { closePopup(8) }} >8</button>
        <button className="btn-font" onClick={() => { closePopup(9) }} >9</button>
        <button className="btn-font" onClick={() => { closePopup(10) }} >10</button>
        <button className="btn-font" onClick={() => { closePopup(11) }} >11</button>
        <button className="btn-font" onClick={() => { closePopup(12) }} >12</button>
        <button className="btn-font" onClick={() => { closePopup(14) }} >14</button>
        <button className="btn-font" onClick={() => { closePopup(16) }} >16</button>
        <button className="btn-font" onClick={() => { closePopup(18) }} >18</button>
        <button className="btn-font" onClick={() => { closePopup(20) }} >20</button>
        <button className="btn-font" onClick={() => { closePopup(22) }} >22</button>
        <button className="btn-font" onClick={() => { closePopup(24) }} >24</button>
        <button className="btn-font" onClick={() => { closePopup(26) }} >26</button>
        <button className="btn-font" onClick={() => { closePopup(28) }} >28</button>
        <button className="btn-font" onClick={() => { closePopup(32) }} >32</button>
        <button className="btn-font" onClick={() => { closePopup(36) }} >36</button>
        <button className="btn-font" onClick={() => { closePopup(40) }} >40</button>
        <button className="btn-font" onClick={() => { closePopup(48) }} >48</button>
        <button className="btn-font" onClick={() => { closePopup(56) }} >56</button>
        <button className="btn-font" onClick={() => { closePopup(64) }} >64</button>
        <button className="btn-font" onClick={() => { closePopup(72) }} >72</button>
        <button className="btn-font" onClick={() => { closePopup(96) }} >96</button>
        <button className="btn-font" onClick={() => { closePopup(128) }} >128</button>
        <button className="btn-font" onClick={() => { closePopup(160) }} >160</button>
        <button className="btn-font" onClick={() => { closePopup(192) }} >192</button>
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
      </div>
    </div>
  );
}
