  export const clickScroll = (name:string) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };