import instagramLogo from "../assets/instagram-logo.svg"
import twitterLogo from "../assets/twitter-logo.svg"
import whatsappLogo from "../assets/whatsapp-logo.svg"
import YTLogo from "../assets/youtube-logo.svg"

function Footer() {
    return (
        <>
            <footer className="bg-cyan-500 flex justify-center">
                <div className="space-y-8 p-4">
                    <h2 className="text-3xl font-light text-white">¡Comunicate con nosotros!</h2>
                    <div className="flex space-x-8 justify-center">
                        <img className="h-12" src={instagramLogo} alt="instagram"/>
                        <img className="h-12" src={twitterLogo} alt="twitter"/>
                        <img className="h-12" src={YTLogo} alt="youtube"/>
                        <img className="h-12" src={whatsappLogo} alt="whatsapp"/>
                    </div>
                    <p className="text-center text-white">Copyright &copy; 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Footer