declare module "*.svg" {
  const content: Any;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
