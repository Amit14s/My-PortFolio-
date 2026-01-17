import { useEffect, useState } from "react";

function useVisibleCards() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setVisible(1);        // mobile
      } else if (window.innerWidth < 1024) {
        setVisible(2);        // tablet
      } else {
        setVisible(3);        // desktop
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}
export default useVisibleCards