import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  AlertCircle,
  Menu,
  Search,
  ChevronDown,
  Info,
  Heart,
  Share2,
  Download,
} from "lucide-react";

export default function UIKitPage() {
  return (
    <div className="container mx-auto py-10 px-6 space-y-12">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">UI Kit</h1>
          <p className="text-muted-foreground">
            All available shadcn/ui components in this project
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Separator />

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Separator />

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input</h2>
        <div className="max-w-md space-y-4">
          <Input type="text" placeholder="Enter text..." />
          <Input type="email" placeholder="Enter email..." />
          <Input type="password" placeholder="Enter password..." />
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-9" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logo Card</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-32 bg-muted">
              <div className="w-16 h-16 bg-primary rounded-lg" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge>Software</Badge>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card with multiple actions
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button size="sm">View</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Analytics</Badge>
          <Badge variant="secondary">Software</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge>Platform</Badge>
          <Badge variant="secondary">Database</Badge>
          <Badge variant="outline">AI</Badge>
        </div>
      </section>

      <Separator />

      {/* Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert message.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Permission Notice</AlertTitle>
            <AlertDescription>
              Each SVG includes a link to its respective product. Permission
              must be obtained before using a logo.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator />

      {/* Dropdown Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dropdown Menu</h2>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Open Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Favorite
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <Separator />

      {/* Sheet */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sheet (Slide-over)</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sheet Content</h3>
              <p className="text-sm text-muted-foreground">
                This is a sheet component that slides in from the side. Perfect
                for mobile navigation or additional content.
              </p>
              <Separator />
              <div className="space-y-2">
                <Button className="w-full">Action 1</Button>
                <Button className="w-full" variant="outline">
                  Action 2
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </section>

      <Separator />

      {/* Tooltip */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tooltip</h2>
        <TooltipProvider>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <Heart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to favorites</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </section>

      <Separator />

      {/* Theme Toggle */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Toggle</h2>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <p className="text-sm text-muted-foreground">
            Toggle between light, dark, and system theme
          </p>
        </div>
      </section>

      <Separator />

      {/* Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skeleton (Loading States)</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-32 w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-[100px]" />
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
