declare module "*.jpg";
declare module "*.png";
declare module "*.gif";
declare module "*.svg" {
  const content: any;
  export default content;
}

// Remove later
declare module "*";
