export default function Header({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className={`${lg_screen_width} ${default_screen_width}`}>

    </div>
  )
}
