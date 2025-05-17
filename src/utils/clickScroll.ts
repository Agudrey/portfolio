  export const clickScroll = (name:string) => {
    const element = document.getElementById(name);
    if (element && name!== "hero") {
      return element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    
    if (element && name === "hero") {
      return element.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };