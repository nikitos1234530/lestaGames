import { FC } from 'react'
import './Stub.css'
interface IStubProps {
    text: string;
}
export const Stub: FC<IStubProps> = ({ text }) => {
    return (
        <div className="Stub">
            {text}
        </div>
    )
}