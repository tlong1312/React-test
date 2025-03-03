
import './style.css';

const MyComponent = () => {
    // const dragonaxii = "long ne";
    // const dragonaxii = 25;
    // const dragonaxii = true;
    // const dragonaxii = undefined;
    // const dragonaxii = null;
    const dragonaxii = [1, 2, 3]
    // const dragonaxii = {
    //     name: "long",
    //     age: 25
    // }
    return (
        <>
            <div>{JSON.stringify(dragonaxii)} lai lan nua ne</div>
            <div>{console.log("long ne")}</div>
            <div className="child" style={{borderRadius: "10px"}}>Child</div>
        </>
        
    );
}

export default MyComponent;