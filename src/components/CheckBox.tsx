
interface TypeCheckBox {
    content: string,
    status: boolean
}

export const CheckBox = ({content, status}: TypeCheckBox) => {

    return (
        <div>
            <div className="flex justify-center">
            <div> {content}</div>
            <div>
                {status ? "✅" : "❌"}
            </div>
            </div>
        </div>
    )
}