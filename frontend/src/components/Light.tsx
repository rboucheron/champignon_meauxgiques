import Lights from '../assets/light.png'

const Light = () => {
    return (
        <>
            <img src={Lights} style={{ position: 'absolute', zIndex: '10' }} alt="" />
        </>
    )
}

export default Light;