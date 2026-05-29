import  { memo } from "react"
type Props = {
    name: string,
}

const ProfileCard = (props: Props) => {
    console.log("Rendered <ProfileCard />");
    return (
        <div>
            {props.name}
        </div>
    )
}

export const MemoizedProfileCard = memo(ProfileCard);