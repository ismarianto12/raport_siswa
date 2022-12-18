import { NavLink } from "react-router-dom"

export const Breadcrumb = ({ back, title }) => {

    return (
        <><nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to={back}>Home</NavLink></li>
                <li className="breadcrumb-item active"><NavLink href="#">{title}</NavLink></li>

            </ol>
        </nav>

        </>)
}