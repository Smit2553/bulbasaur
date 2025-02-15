import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart2,
  Globe2,
  LineChart,
  TrendingUp,
  Leaf,
  Play,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky flex justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Bulbasaur</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#markets"
              className="transition-colors hover:text-primary"
            >
              Map
            </Link>
            <Link href="#demo" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-primary"
            >
              Pricing
            </Link>
          </nav>
          {/* <Button>Get Started</Button> */}
        </div>
      </header>
      <main className="flex-1">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* CONTENT */}
        <section className="relative">
          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Keeping Forests Standing,{" "}
                    <span className="gradient-title">
                      Keeping Communities Safe.
                    </span>
                  </h1>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    By leveraging satellite imagery, sensor networks, and
                    machine learning, the app provides instant notifications to
                    firefighters, emergency responders, and communities, helping
                    to prevent disasters and protect lives. Stay ahead of
                    wildfires with early detection and smarter prevention.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* <Button size="lg" className="gap-2">
                    Start Trading <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button> */}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">45,772</h4>
                    <p className="text-sm text-muted-foreground">
                      Anual US wildfires
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">
                      $20 billion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Anually in Damages
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">85%</h4>
                    <p className="text-sm text-muted-foreground">
                      Caused by Human Activity
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
                <div className="relative bg-white rounded-2xl border p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">
                          Bulbasaur in Action: Early Wildfire Detection
                        </h3>
                      </div>
                      <button className="px-4 py-2 rounded-lg border-1 border-gray-300 hover:bg-[#83ba36] hover:cursor-pointer hover:border-black">
                        demo{" "}
                      </button>
                      {/* <Button variant="outline" size="sm">
                        Live Demo
                      </Button> */}
                    </div>
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                      <BarChart2 className="h-24 w-24 text-primary/40" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-2">
                          <div className="h-2 rounded-full bg-primary/20" />
                          <div className="h-2 w-2/3 rounded-full bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Markets We Cover
            </h2>
            {/* <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <BarChart2 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Forex Markets</h3>
                  <p className="text-sm text-muted-foreground">
                    Trade major, minor, and exotic currency pairs with
                    confidence using our precise signals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <LineChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Indian Markets</h3>
                  <p className="text-sm text-muted-foreground">
                    Get accurate signals for Nifty, Bank Nifty, and other Indian
                    market instruments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Globe2 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Global Markets</h3>
                  <p className="text-sm text-muted-foreground">
                    Access signals for commodities, indices, and cryptocurrency
                    markets worldwide.
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>

        <section id="demo" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
                Watch how the Ved Indicator provides precise trading signals in
                real-time market conditions.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ved Indicator Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-center">
              {/* <Button size="lg" className="gap-2">
                <Play className="w-4 h-4" /> Start Your Free Trial
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Ved Indicator. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
