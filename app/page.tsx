export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Hi, I'm Minhaj Khan</h1>
        <p className="text-xl text-gray-700">
          I'm an AI enthusiast exploring the intersection of technology, creativity, and community.
          I love volunteering, petting cats, watching sunsets, and have a serious sweet tooth.
          I'm always learning and sharing what I know about AI.
        </p>
        <div className="flex gap-4">
          <a href="#" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold">Join my newsletter</a>
          <a href="#projects" className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold">Explore my work</a>
        </div>
      </section>
      {/* Writing Section */}
      <section id="writing" className="space-y-6">
        <h2 className="text-3xl font-bold">Writing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-gray-600">Stay tuned for my latest articles and tutorials on AI.</p>
          </article>
          <article className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-gray-600">Stay tuned for my latest articles and tutorials on AI.</p>
          </article>
          <article className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-gray-600">Stay tuned for my latest articles and tutorials on AI.</p>
          </article>
        </div>
      </section>
      {/* Videos Section */}
      <section id="videos" className="space-y-6">
        <h2 className="text-3xl font-bold">Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border flex items-center justify-center h-32">
            <span className="text-gray-500">Video coming soon</span>
          </div>
          <div className="p-4 rounded-lg border flex items-center justify-center h-32">
            <span className="text-gray-500">Video coming soon</span>
          </div>
          <div className="p-4 rounded-lg border flex items-center justify-center h-32">
            <span className="text-gray-500">Video coming soon</span>
          </div>
        </div>
      </section>
      {/* Podcast Section */}
      <section id="podcast" className="space-y-6">
        <h2 className="text-3xl font-bold">Podcast</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border">
            <p className="text-gray-600">Podcast episodes will be released here soon. Stay tuned!</p>
          </div>
          <div className="p-4 rounded-lg border">
            <p className="text-gray-600">Podcast episodes will be released here soon. Stay tuned!</p>
          </div>
        </div>
      </section>
      {/* Projects/Courses Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-bold">Projects & Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Project coming soon</h3>
            <p className="text-sm text-gray-600">Exciting projects and courses will appear here.</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Project coming soon</h3>
            <p className="text-sm text-gray-600">Exciting projects and courses will appear here.</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Project coming soon</h3>
            <p className="text-sm text-gray-600">Exciting projects and courses will appear here.</p>
          </div>
        </div>
      </section>
      {/* Newsletter CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Join my newsletter</h2>
        <p className="text-gray-600">Get updates on my latest work and insights into AI by subscribing.</p>
        <a href="#" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold inline-block">Subscribe</a>
      </section>
      {/* Footer */}
      <footer className="pt-16 border-t">
        <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Minhaj Khan. All rights reserved.</p>
      </footer>
    </main>
  )
}
