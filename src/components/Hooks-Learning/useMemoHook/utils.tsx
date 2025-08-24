export const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
    return{
        id: index + 1,
        isSelected: index === 29_999_999,
    }
})