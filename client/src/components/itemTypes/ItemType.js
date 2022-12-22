import { useEffect } from "react";
import ItemTypeList from "./ItemTypeList";
import { ItemTypeConsumer } from "../../providers/ItemTypeProvider";


const ItemType = ( getAllItemType,  ) => {

    useEffect( () => {
        getAllItemType()
    }, [])

    return (
        <>
            <ItemTypeList 
                itemType={itemType}
            />
        </>
    )
}

const ConnectedItemType = (props) => (
    <ItemTypeConsumer>
        { value => <ItemType {...value} {...props } />}
    </ItemTypeConsumer>
)

export default ConnectedItemType;