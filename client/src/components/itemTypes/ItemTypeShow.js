import { ItemTypeConsumer } from "../../providers/ItemTypeProvider";

const ItemTypeShow = ({ id, iname, desc, updateItemType, deleteItemType }) => {

    return (
        <>
            <h3>{iname}</h3>
            <p>{desc}</p>
        </>
    )
}

const ConnectedItemTypeShow = (props) => (
    <ItemTypeConsumer>
        { value => <ItemTypeShow {...value} {...props} /> }
    </ItemTypeConsumer>
)

export default ConnectedItemTypeShow;