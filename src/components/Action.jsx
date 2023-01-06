import { NavLink } from 'react-router-dom'
const Action = ({ url, title, classname, blank }) => {
    return (
        <>
            {blank ?
                <NavLink
                    to={url}
                    target="_blank"
                    className={classname}
                >
                    {title}
                </NavLink>
                : <NavLink
                    to={url}
                    className={classname}
                >
                    {title}
                </NavLink>
            }
        </>
    )
}
export default Action