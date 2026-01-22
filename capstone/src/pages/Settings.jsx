import React from 'react';
import {useTheme} from '../context/ThemeContext';
import lights from '../assets/lights.png';
import styles from '../styles/Settings.module.css';
import darks from '../assets/darks.png';

function Settings() {

  const { theme } = useTheme();

  const layoutStyle = {
        backgroundColor: theme === "light" ? "#E6ECFB" : "#18235D",
        color: theme === "light" ? "black" : "#ffffffff"
      };

    const layoutsStyle = {
        backgroundColor: theme === "light" ? "#F3FBE6" : "#CDCDCD",
        color: theme === "light" ? "black" : "black"
      };

  const { toggleTheme } = useTheme();

  return (
    <div className={styles.layout} >

     
      <div className={styles.sidebar} style={layoutsStyle}>
        <h1>Site Settings</h1>
      </div>


      <div className={styles.appearanceContainer} style={layoutStyle}>
       

        <div className={styles.themePreviewContainer} style={layoutStyle}>


          <div className={styles.themePreview} style={layoutStyle}>
            <h3>Light Theme</h3>

            <img
              src={lights}
              alt="Light theme preview"
              className={styles.previewImage}
            />


            <button className={styles.toggleButton} onClick={toggleTheme}>
              Toggle Theme
            </button>
          </div>

          <div className={styles.themePreview} style={layoutStyle}>
            <h3>Dark Theme</h3>

            <img
              src={darks}
              alt="Dark theme preview"
              className={styles.previewImage}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;