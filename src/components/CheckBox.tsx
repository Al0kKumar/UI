
export const CheckBox = ({content, status}) => {

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