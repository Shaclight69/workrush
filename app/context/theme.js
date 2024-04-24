const themes = [
  {
    name: "dark",
    colorMainBg: "#212121",
    // colorBg: "#252525",
    colorItem: "rgba(249,249,249, 0.08)",
    borderColor: "rgba(249,249,249, 0.08)",
    colorSecBg: "#181818",
    // colorBg4: "#1A1A1A",
    colorDanger: "#ad2831",
    colorButtonGradient:
      "linear-gradient(90deg, rgba(107,190,146,1) 20%, rgba(0,101,16,1) 50%, rgba(107,190,146,0) 82%)",
    colorGreenDark: "#558300",
    activeNavLink: "rgba(249,249,249, 0.08)",
    activeNavLinkHover: "rgba(249,249,249, 0.03)",
    colorGreyDark: "#131313",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey5: "#2a2e35",
    colorWhite: "#fff",
    colorPrimaryGreen: "#558300",
    colorReverse: "#dbe1e8",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    sidebarWidth: "15rem",
    colorIcons: "rgba(249,249,249, 0.35)",
    colorIcons2: "rgba(249,249,249, 0.75)",
  },
  /*
     #F5F5F5 #F0F0F0 #ECECEC

   #E0E0E0 #E8E8E8 #E5E5E5  
    #FAF3E0 #F8F1E5 #FDF3E7 

  #E6F7FF #E6FFE6 #FCE4EC 
   #DADADA #DEDEDE #EAEAEA 

    #D8D8D8 #D4D4D4 #CDCDCD */
  {
    name: "light",
    colorMainBg: "#F9F9F9",
    colorSecBg: "#EDEDED",
    borderColor: "#c1c5ce",
    colorItem: "#ececec",
    // colorBg: "#fff",
    // colorBg4: "#1A1A1A",
    colorDanger: "#ad2831",
    colorGreenDark: "#558300",
    activeNavLink: "rgba(230,230,230, .87)",
    activeNavLinkHover: "#C5C5C5",
    colorGreyDark: "#131313",
    colorGrey0: "#131313",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey5: "#dcdfe3",
    colorReverse: "#2a2e35",
    colorPrimaryGreen: "#558300",
    colorWhite: "#fff",
    borderRadiusMd2: "15px",
    borderRadiusSm: "8px",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    sidebarWidth: "15rem",
  },
];
export default themes;

/*
const themes = [
  {
    name: "default",
    colorBg: "#252525",
    colorBg2: "#212121",
    colorBg3: "#181818",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorFontPrimary: "#e5e7eb",
    colorTextSecondary: "#B0B3B8",
    colorTextPrimary: "#FFFFFF",
    colorTextLight: "#f8f8f8",
    colorbackground: "#FBFBFD",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorButtonGradient:
      "linear-gradient(90deg, rgba(107,190,146,1) 20%, rgba(0,101,16,1) 50%, rgba(107,190,146,0) 82%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    activeNavLink: "rgba(249,249,249, 0.08)",
    activeNavLinkHover: "rgba(249,249,249, 0.03)",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorGreyDark: "#131313",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorWhite: "#fff",
    colorPrimaryGreen: "#6FCF97",
    colorReverse: "#dbe1e8",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    sidebarWidth: "15rem",
    sidebarCollapsed: "5.4rem",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    padLRSm: "0 2rem",
    colorIcons: "rgba(249,249,249, 0.35)",
    colorIcons2: "rgba(249,249,249, 0.75)",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    marLRSm: "0 1rem",
  },
     #F5F5F5 #F0F0F0 #ECECEC

   #E0E0E0 #E8E8E8 #E5E5E5  
    #FAF3E0 #F8F1E5 #FDF3E7 

  #E6F7FF #E6FFE6 #FCE4EC 
   #DADADA #DEDEDE #EAEAEA 

    #D8D8D8 #D4D4D4 #CDCDCD 
  {
    name: "light",
    colorBg: "#fff",
    colorBg2: "#F9F9F9",
    colorBg3: "#EDEDED",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorTextSecondary: "#B0B3B8",
    colorFontPrimary: "#6c7983",
    colorTextPrimary: "#FFFFFF",
    colorTextLight: "#f8f8f8",
    colorbackground: "#FBFBFD",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    activeNavLink: "rgba(230,230,230, .87)",
    activeNavLinkHover: "#C5C5C5",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorGreyDark: "#131313",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorReverse: "#2a2e35",
    colorPrimaryGreen: "#6FCF97",
    colorWhite: "#fff",
    buttonGradient1:
      "linear-gradient(110.42deg, rgba(107, 190, 146, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient2:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient3:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient4:
      "linear-gradient(110.42deg, rgba(168, 85, 247, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient5:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient6:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient7:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    buttonGradient8:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient9:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    buttonGradient10:
      "linear-gradient(110.42deg, rgba(235, 87, 87, 0.7) 29.2%, rgba(189, 68, 166, 0.7) 53.82%, rgba(247, 85, 143, 0.1) 63.56%)",
    buttonGradient11:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient12:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    buttonGradient13:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(99, 3, 255, 0.7) 63.56%)",
    buttonGradient14:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    borderRadiusMd: "12px",
    borderRadiusMd2: "15px",
    borderRadiusSm: "8px",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    shadow1: "4px 4px 84px rgba(16, 10, 86, 0.04)",
    shadow2: "0px 48px 77px rgba(8, 18, 69, 0.07)",
    shadow3: "0 14px 40px rgb(0 0 0 / 25%)",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    shadow5: "0px 4px 0px rgba(249,249,249, 0.35)",
    shadow6:
      "0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",
    sidebarWidth: "15rem",
    sidebarCollapsed: "5.4rem",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    padLRSm: "0 2rem",
    colorIcons: "#999999",
    colorIcons2: "#181818",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    marLRSm: "0 1rem",
  },
];
export default themes;
  */
