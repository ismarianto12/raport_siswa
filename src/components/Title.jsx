import { Helmet } from "react-helmet"

const Title = ({ params }) => {
    return (
        <Helmet>
            <title>{params}</title>
        </Helmet>
    )
} 
export default Title