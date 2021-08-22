import { Fragment } from "react"
import SweetsSummary from "./SweetsSummary"
import AvailableSweets from "./AvailableSweets"

const Sweets = () => {
    return (
        <Fragment>
            <SweetsSummary />
            <AvailableSweets />
        </Fragment>
    )
}

export default Sweets
