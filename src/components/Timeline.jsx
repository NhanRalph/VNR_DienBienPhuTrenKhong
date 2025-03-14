export default function Timeline() {
  
    return (
        <div>
            <div style={{width: "88%", margin: "20px auto"}}>
                <img src={'https://assets2.htv.com.vn/Images/.NEWZ/12.2023/17/n4/1.jpg'} alt={"1"} style={styles.image} />
                <img src={'https://assets2.htv.com.vn/Images/.NEWZ/12.2023/17/n4/2.jpg'} alt={'2'} style={styles.image} />
                <img src={'https://assets2.htv.com.vn/Images/.NEWZ/12.2023/17/n4/3.jpg'} alt={'3'} style={styles.image} />
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
  