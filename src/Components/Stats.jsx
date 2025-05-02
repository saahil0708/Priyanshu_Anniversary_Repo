import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Users, ArrowRight, Award, Briefcase, GraduationCap, Building, Menu } from "lucide-react"

const AlumniStatsDashboard = () => {
  const tabs = [
    { id: "alumni", label: "Alumni Profiles", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "events", label: "Hosted Events", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { id: "cities", label: "City Chapters", icon: <MapPin className="h-4 w-4 mr-2" /> },
    { id: "partners", label: "Industry Partners", icon: <Building className="h-4 w-4 mr-2" /> },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Sample Data
  const alumniData = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Lead Data Scientist at Google",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      stats: { batch: "2015", degree: "PhD Computer Science" },
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Software Architect at Amazon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stats: { batch: "2018", degree: "MSc Software Engineering" },
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "VP of Engineering at Netflix",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      stats: { batch: "2012", degree: "BSc Computer Science" },
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO at Fintech Startup",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      stats: { batch: "2016", degree: "MSc AI & Robotics" },
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager at Microsoft",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      stats: { batch: "2019", degree: "MBA Technology" },
    },
    {
      id: 6,
      name: "James Patel",
      role: "Senior UX Designer at Apple",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      stats: { batch: "2017", degree: "BFA Design & Tech" },
    },
  ]

  const eventsData = [
    {
      id: 1,
      title: "Tech Leadership Summit 2023",
      date: "15 Oct 2023",
      location: "San Francisco",
      image: "https://source.unsplash.com/random/600x400?conference",
      attendees: 320,
    },
    {
      id: 2,
      title: "AI & ML Workshop Series",
      date: "5 Nov 2023",
      location: "Virtual",
      image: "https://source.unsplash.com/random/600x400?technology",
      attendees: 450,
    },
    {
      id: 3,
      title: "Alumni Networking Gala",
      date: "12 Dec 2023",
      location: "New York",
      image: "https://source.unsplash.com/random/600x400?gala",
      attendees: 215,
    },
    {
      id: 4,
      title: "Tech Career Fair 2024",
      date: "20 Jan 2024",
      location: "Boston",
      image: "https://source.unsplash.com/random/600x400?career",
      attendees: 500,
    },
  ]

  const citiesData = [
    {
      id: 1,
      city: "San Francisco",
      members: 342,
      image: "https://source.unsplash.com/random/600x400?sanfrancisco",
      founded: 2015,
    },
    {
      id: 2,
      city: "New York",
      members: 286,
      image: "https://source.unsplash.com/random/600x400?newyork",
      founded: 2014,
    },
    {
      id: 3,
      city: "London",
      members: 214,
      image: "https://source.unsplash.com/random/600x400?london",
      founded: 2016,
    },
    {
      id: 4,
      city: "Bangalore",
      members: 176,
      image: "https://source.unsplash.com/random/600x400?bangalore",
      founded: 2017,
    },
    {
      id: 5,
      city: "Berlin",
      members: 145,
      image: "https://source.unsplash.com/random/600x400?berlin",
      founded: 2018,
    },
    {
      id: 6,
      city: "Singapore",
      members: 132,
      image: "https://source.unsplash.com/random/600x400?singapore",
      founded: 2019,
    },
  ]

  const partnersData = [
    {
      id: 1,
      name: "Microsoft",
      since: 2018,
      logo: "https://logo.clearbit.com/microsoft.com",
      level: "Platinum",
    },
    {
      id: 2,
      name: "Google",
      since: 2016,
      logo: "https://logo.clearbit.com/google.com",
      level: "Platinum",
    },
    {
      id: 3,
      name: "Amazon",
      since: 2019,
      logo: "https://logo.clearbit.com/amazon.com",
      level: "Gold",
    },
    {
      id: 4,
      name: "IBM",
      since: 2017,
      logo: "https://logo.clearbit.com/ibm.com",
      level: "Gold",
    },
    {
      id: 5,
      name: "Apple",
      since: 2020,
      logo: "https://logo.clearbit.com/apple.com",
      level: "Silver",
    },
    {
      id: 6,
      name: "Meta",
      since: 2021,
      logo: "https://logo.clearbit.com/meta.com",
      level: "Silver",
    },
  ]

  const renderCards = () => {
    switch (activeTab) {
      case "alumni":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {alumniData.map((alumni) => (
              <AlumniCard key={alumni.id} data={alumni} />
            ))}
          </div>
        )
      case "events":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {eventsData.map((event) => (
              <EventCard key={event.id} data={event} />
            ))}
          </div>
        )
      case "cities":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {citiesData.map((city) => (
              <CityCard key={city.id} data={city} />
            ))}
          </div>
        )
      case "partners":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 lg:gap-8">
            {partnersData.map((partner) => (
              <PartnerCard key={partner.id} data={partner} />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen font-[Poppins] bg-gradient-to-b from-zinc-50 to-zinc-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 md:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white shadow-sm border border-zinc-200">
            Global Alumni Network
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4 md:mb-6 tracking-tight">
            Alumni Network <span className="text-[#ca0019]">Hub</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Connect with a global community of industry leaders, entrepreneurs, and change-makers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          {[
            { label: "Alumni", value: "5,200+", icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-[#ca0019]" /> },
            { label: "Events", value: "120/year", icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-[#ca0019]" /> },
            {
              label: "Chapters",
              value: "32 Cities",
              icon: <MapPin className="h-6 w-6 md:h-8 md:w-8 text-[#ca0019]" />,
            },
            {
              label: "Partners",
              value: "45+ Companies",
              icon: <Building className="h-6 w-6 md:h-8 md:w-8 text-[#ca0019]" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 text-center"
            >
              <div className="mx-auto mb-3 md:mb-4 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-full bg-red-50">
                {stat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 mb-0.5 md:mb-1">{stat.value}</h3>
              <p className="text-sm md:text-base text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs - Desktop */}
        <div className="hidden md:flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center p-1.5 bg-white rounded-xl shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id ? "bg-[#ca0019] text-white shadow-md" : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs - Mobile */}
        <div className="md:hidden mb-6">
          <div className="flex justify-between items-center bg-white rounded-xl shadow-sm p-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 text-zinc-700 hover:bg-zinc-100 rounded-lg"
            >
              <Menu className="h-5 w-5" />
              <span className="ml-2 font-medium">{tabs.find((tab) => tab.id === activeTab)?.label}</span>
            </button>
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id ? "bg-[#ca0019] text-white" : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {tab.icon.props.children}
                </button>
              ))}
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-2 bg-white rounded-xl shadow-sm overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id ? "bg-red-50 text-[#ca0019]" : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Section Title */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </h2>
          <button className="text-[#ca0019] hover:text-[#ca0019] text-sm font-medium flex items-center">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        {/* Cards Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-8 sm:pb-12"
          >
            {renderCards()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// Custom Card Components
const AlumniCard = ({ data }) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-zinc-100 transition-all duration-200"
  >
    <div className="p-4 sm:p-6">
      <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-red-100 overflow-hidden flex-shrink-0">
          <img
            src={data.image || "/placeholder.svg"}
            alt={data.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg"
              e.currentTarget.onerror = null
            }}
          />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 line-clamp-1">{data.name}</h3>
          <p className="text-[#ca0019] flex items-center text-sm">
            <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
            <span className="line-clamp-1">{data.role}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm bg-zinc-50 rounded-lg p-3 sm:p-4">
        <div className="flex items-center">
          <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-zinc-500" />
          <div>
            <p className="text-zinc-500 text-xs">Batch</p>
            <p className="font-medium text-zinc-900">{data.stats.batch}</p>
          </div>
        </div>
        <div className="flex items-center">
          <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-zinc-500" />
          <div>
            <p className="text-zinc-500 text-xs">Degree</p>
            <p className="font-medium text-zinc-900 line-clamp-1">{data.stats.degree}</p>
          </div>
        </div>
      </div>
      <button className="w-full mt-3 sm:mt-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-red-500 hover:text-[#ca0019] border border-red-300 hover:border-[#ca0019] transition-colors">
        View Profile
      </button>
    </div>
  </motion.div>
)

const EventCard = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-zinc-100 transition-all duration-200"
  >
    <div className="relative">
      <img
        className="h-40 sm:h-48 md:h-56 w-full object-cover"
        src={data.image || "/placeholder.svg"}
        alt={data.title}
      />
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
        <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white text-[#ca0019] rounded-full text-xs font-semibold shadow-md">
          {data.attendees}+ Attendees
        </div>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3 line-clamp-1">{data.title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-zinc-600 sm:space-x-6 mb-3 sm:mb-4">
        <span className="flex items-center text-xs sm:text-sm mb-1 sm:mb-0">
          <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-[#ca0019]" /> {data.date}
        </span>
        <span className="flex items-center text-xs sm:text-sm">
          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-[#ca0019]" /> {data.location}
        </span>
      </div>
      <div className="flex justify-between mt-4 sm:mt-6">
        <button className="text-zinc-600 hover:text-zinc-800 text-xs sm:text-sm font-medium border-b border-dashed border-zinc-300">
          View Details
        </button>
        <button className="text-[#ca0019] hover:text-red-600 text-xs sm:text-sm font-medium flex items-center">
          View Photos <ArrowRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  </motion.div>
)

const CityCard = ({ data }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-zinc-100 transition-all duration-200"
  >
    <div className="relative">
      <img
        className="h-36 sm:h-40 md:h-48 w-full object-cover"
        src={data.image || "/placeholder.svg"}
        alt={data.city}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent flex items-end">
        <div className="p-4 sm:p-6 text-white">
          <h3 className="font-bold text-xl sm:text-2xl">{data.city}</h3>
        </div>
      </div>
    </div>
    <div className="p-3 sm:p-5 flex justify-between items-center">
      <div>
        <div className="flex items-center text-xs sm:text-sm text-zinc-600 mb-0.5 sm:mb-1">
          <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 text-[#ca0019]" />
          <span className="font-medium">{data.members} members</span>
        </div>
        <div className="text-xs text-zinc-500">Chapter founded: {data.founded}</div>
      </div>
      <button className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-red-50 text-[#ca0019] hover:bg-red-100 transition-colors">
        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </button>
    </div>
  </motion.div>
)

const PartnerCard = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center border border-zinc-100 transition-all duration-200"
  >
    <div className="relative mb-2 sm:mb-4">
      <div
        className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full
        ${
          data.level === "Platinum"
            ? "bg-purple-50 text-purple-700 border border-purple-200"
            : data.level === "Gold"
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-zinc-50 text-zinc-700 border border-zinc-200"
        }`}
      >
        {data.level}
      </div>
      <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex items-center justify-center">
        <img className="max-h-full max-w-full object-contain" src={data.logo || "/placeholder.svg"} alt={data.name} />
      </div>
    </div>
    <h3 className="font-bold text-zinc-900 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 text-center">{data.name}</h3>
    <p className="text-[10px] sm:text-xs text-zinc-500 text-center">Partner since {data.since}</p>
  </motion.div>
)

export default AlumniStatsDashboard
