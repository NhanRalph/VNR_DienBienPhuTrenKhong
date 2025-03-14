import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

export default function Timeline() {
  
    return (
        <div>
            <div style={{width: "88%", margin: "20px auto"}}>
                <img src={image1} alt={"1"} style={styles.image} />
                <img src={image2} alt={'2'} style={styles.image} />
                <img src={image3} alt={'3'} style={styles.image} />
            </div>
        </div>
    );
  }
  
  const styles = {
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
      objectFit: "cover",
    },
  };
  