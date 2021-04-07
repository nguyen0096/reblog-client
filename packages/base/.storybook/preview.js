export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}

const placeholder = (Story, context) => {
    return (
        <Story />
    )
}

export const decorators = [
    placeholder,
]