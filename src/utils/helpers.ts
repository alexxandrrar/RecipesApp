export const getCombinedClassName = (component: string,className?: string) => {
    const combinedClassName = className ? `${component} ${className}`.trim() : component;
    return combinedClassName.trim();
}
