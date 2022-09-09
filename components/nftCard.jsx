import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NFTCard = ({ nft }) => {

    const link = `https://etherscan.io/address/${nft.contract.address}` 

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600 small">Id: {nft.id.tokenId.substring(0,5)  + '...' +  nft.id.tokenId.substring(61,66)}</p>
                <p className="text-gray-600 small" >
                    <button
                    onClick={() => {navigator.clipboard.writeText(nft.contract.address)}}
                ><FontAwesomeIcon icon={faCopy} /></button>Address: {nft.contract.address.substring(0,5) + '...' + nft.contract.address.substring(38,42)}</p>
            </div>
            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description}</p>
            </div>
            <button className={"text-white bg-blue-400 mt-3 rounded-sm w-5/5"}><a href={link} target="_blank">View on Etherscan</a></button>
        </div>

    </div>
    )
}