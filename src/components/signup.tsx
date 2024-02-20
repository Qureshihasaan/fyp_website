
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-2">
        {/* <Input id="name" placeholder="Name" prefix={<div className="h-4 w-4" />} />
        <Input id="email" placeholder="Email" prefix={<div className="h-4 w-4" />} type="email" />
        <Input id="password" placeholder="Password" prefix={<div className="h-4 w-4" />} type="password" /> */}
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  )
}

