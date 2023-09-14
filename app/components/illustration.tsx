import Image from 'next/image';
const ILLUSTRATION_ARIA_LABEL =
  "Weather Image background Image.";

export function Illustration() {
  return (
    <>
      <Image src="https://wallpaperaccess.com/full/5466358.jpg" width ={780} height = {780}>
      </Image>
    </>
  );
}
