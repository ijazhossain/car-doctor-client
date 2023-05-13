import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log('google', user);
            }).catch(error => console.log(error))
    }
    return (
        <div className="text-center pb-12">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                G
            </button>

        </div>
    );
};

export default SocialLogin;