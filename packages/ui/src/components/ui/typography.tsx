// export function TypographyH1() {
//   return (
//     <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
//       Taxing Laughter: The Joke Tax Chronicles
//     </h1>
//   )
// }

import { cn } from "@repo/ui/lib/utils"

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className)}
      {...props}
    />
  )
}

export { TypographyH1 }