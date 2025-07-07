"use client";

import { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { getTranslations, type Locale } from "@/lib/i18n";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Globe,
  PieChart,
  Activity,
  ShoppingCart,
  Code,
  Check,
} from "lucide-react";
import { animate, stagger, inView } from "motion";

interface HomeProps {
  params: { locale: Locale };
}

export default function Home({ params }: HomeProps) {
  const { locale } = params;
  const t = getTranslations(locale);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    // Animate elements on scroll
    const animateOnScroll = (selector: string, animation: any) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        inView(element, () => {
          animate(element, animation, { duration: 0.6, delay: stagger(0.1) });
        });
      });
    };

    // Hero animations
    animate(".hero-badge", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
    animate(
      ".hero-title",
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.8, delay: 0.2 }
    );
    animate(
      ".hero-description",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.4 }
    );
    animate(
      ".hero-buttons",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.6 }
    );
    animate(
      ".hero-stats",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: 0.8 }
    );
    animate(
      ".hero-card",
      { opacity: [0, 1], x: [50, 0] },
      { duration: 0.8, delay: 0.4 }
    );

    // Section animations
    animateOnScroll(".service-card", { opacity: [0, 1], y: [30, 0] });
    animateOnScroll(".feature-item", { opacity: [0, 1], y: [20, 0] });
    animateOnScroll(".pricing-card", { opacity: [0, 1], y: [30, 0] });
    animateOnScroll(".testimonial-card", { opacity: [0, 1], y: [20, 0] });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                AnalytiX Pro
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {t.nav.services}
              </a>
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {t.nav.features}
              </a>
              <a
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSwitcher currentLocale={locale} />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="hero-badge bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-900">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {t.hero.badge}
                </Badge>
                <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {t.hero.title}
                  <span className="text-red-600"> {t.hero.titleHighlight}</span>
                </h1>
                <p className="hero-description text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.hero.description}
                </p>
              </div>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-red-200 dark:border-red-800"
                >
                  {t.hero.viewWork}
                </Button>
              </div>
              <div className="hero-stats flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t.hero.stats.projects}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t.hero.stats.satisfaction}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t.hero.stats.experience}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="hero-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 dark:bg-red-950/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-6 h-6 text-red-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Monthly Users
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      47,832
                    </div>
                    <div className="text-sm text-green-600">
                      +23% from last month
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-6 h-6 text-green-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Conversion Rate
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      12.4%
                    </div>
                    <div className="text-sm text-green-600">
                      +5.2% improvement
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Revenue Growth
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      +34%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 mb-4">
              {t.services.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.services.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <Globe className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.analytics.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.analytics.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.analytics.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <Shield className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.matomo.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.matomo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.matomo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <Code className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.websites.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.websites.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.websites.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <ShoppingCart className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.ecommerce.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.ecommerce.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.ecommerce.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <PieChart className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.custom.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.custom.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.custom.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                  <Activity className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <CardTitle className="dark:text-white">
                  {t.services.audit.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {t.services.audit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {t.services.audit.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 mb-4">
              {t.features.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.features.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-item text-center group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all">
                <Target className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t.features.precision.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.precision.description}
              </p>
            </div>
            <div className="feature-item text-center group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all">
                <TrendingUp className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t.features.growth.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.growth.description}
              </p>
            </div>
            <div className="feature-item text-center group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all">
                <Shield className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t.features.privacy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.privacy.description}
              </p>
            </div>
            <div className="feature-item text-center group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all">
                <Zap className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t.features.fast.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.fast.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 mb-4">
              {t.pricing.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t.pricing.description}
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span
                className={`text-sm ${
                  !isYearly
                    ? "text-gray-900 dark:text-white font-semibold"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {t.pricing.monthly}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${
                  isYearly
                    ? "text-gray-900 dark:text-white font-semibold"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {t.pricing.yearly}
              </span>
              {isYearly && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {t.pricing.save}
                </Badge>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="pricing-card relative dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold dark:text-white">
                  {t.pricing.starter.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold dark:text-white">
                    {locale === "sv" ? "2,999" : "299"}
                    {isYearly && (
                      <span className="text-lg">
                        {" "}
                        {locale === "sv" ? "2,399" : "239"}
                      </span>
                    )}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    {locale === "sv" ? "kr" : "$"}/
                    {isYearly
                      ? t.pricing.yearly.toLowerCase()
                      : t.pricing.monthly.toLowerCase()}
                  </span>
                </div>
                <CardDescription className="dark:text-gray-300">
                  {t.pricing.starter.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t.pricing.starter.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  {t.pricing.getStarted}
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="pricing-card relative border-red-200 dark:border-red-800 dark:bg-gray-800">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white">
                  {t.pricing.professional.popular}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold dark:text-white">
                  {t.pricing.professional.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold dark:text-white">
                    {locale === "sv" ? "7,999" : "799"}
                    {isYearly && (
                      <span className="text-lg">
                        {" "}
                        {locale === "sv" ? "6,399" : "639"}
                      </span>
                    )}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    {locale === "sv" ? "kr" : "$"}/
                    {isYearly
                      ? t.pricing.yearly.toLowerCase()
                      : t.pricing.monthly.toLowerCase()}
                  </span>
                </div>
                <CardDescription className="dark:text-gray-300">
                  {t.pricing.professional.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t.pricing.professional.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  {t.pricing.getStarted}
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="pricing-card relative dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold dark:text-white">
                  {t.pricing.enterprise.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold dark:text-white">
                    {t.pricing.enterprise.price}
                  </span>
                </div>
                <CardDescription className="dark:text-gray-300">
                  {t.pricing.enterprise.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t.pricing.enterprise.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-red-200 dark:border-red-800"
                >
                  {t.pricing.contactSales}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 mb-4">
              {t.testimonials.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.testimonials.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.reviews.map((review, index) => (
              <Card
                key={index}
                className="testimonial-card bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 mb-4">
                {t.contact.badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t.contact.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {t.contact.getStarted}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        hello@analytixpro.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        +46 (0) 123-456-789
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Stockholm, Sweden
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t.contact.freeAudit}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t.contact.freeAuditDesc}
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder={t.contact.form.company}
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  {t.contact.form.send}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AnalytiX Pro</span>
              </div>
              <p className="text-gray-400 text-sm">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Google Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Matomo Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.services.websites.title}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.services.ecommerce.title}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.caseStudies}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.blog}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.documentation}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.support}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.footer.links.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
