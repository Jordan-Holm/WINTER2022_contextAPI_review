import React, { useState } from "react";
import axios from "axios";

export const ItemTypeContext = React.createContext();
export const ItemTypeConsumer = ItemTypeContext.Consumer;

const ItemTypeProvider = ({ childern }) => {

    const [itemType, setItemType] = useState([])

    const getAllItemType = () => {
        axios.get("/api/item_type")
            .then( res => {
                setItemType(res.data)
            })
            .catch( err => console.log(err) )
    }

    const addItemType = (itemType) => {
        axios.post("/api/item_type", { itemType })
            .then( res => {
                setItemType([...itemType, res.data])
            })
            .catch( err => console.log(err) )
    }
    
    const updateItemType = (id, itemType) => {
        axios.put(`/api/item_type/${id}`)
            .then( res => {
                let newUpdateItemType = itemType.map( i =>{
                    if (i.id === id ) {
                        return res.data
                    }
                    return i
                })
                setItemType(newUpdateItemType)
            })
            .catch( err => console.log(err))
    }

    const deleteItemType = (id) => {
        axios.delete(`api/item_type/${id}`)
            .then( res => {
                setItemType(itemType.filter( i => i.id !== id))
            })
            .catch( err => console.log(err) )
    }

    return (
        <ItemTypeContext.Provider value={{
            itemType,
            getAllItemType,
            addItemType,
            updateItemType, 
            deleteItemType
        }}>
            { childern }
        </ItemTypeContext.Provider>
    )
}

export default ItemTypeProvider;



