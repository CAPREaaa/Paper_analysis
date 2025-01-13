import Feature from "./Feature"

const features: FeatureProps[] = [
  { 
    id: 1, 
    title: 'Upload', 
    content: 'Allows users to upload resources, including papers and articles in PDF or DOC format, expanding the database with valuable academic content.' 
  },
  { 
    id: 2, 
    title: 'Search', 
    content: 'Enables precise searches within the content, including title, DOI, author, and keywords, helping users find relevant articles quickly and efficiently.' 
  },
  { 
    id: 3, 
    title: 'Visualization', 
    content: 'After searching, the system lists all related articles and generates a graph to visually represent the relationships and connections between them.' 
  },
  { 
    id: 4, 
    title: 'Authentication', 
    content: 'Provides a secure registration and login mechanism, offering different authority levels for users, which enables tailored access and functionalities based on user roles.' 
  },
  { 
    id: 5, 
    title: 'Management', 
    content: 'Gives users the capability to manage resources by editing the data for an article or deleting it, ensuring the database remains accurate and up-to-date.' 
  },
  { 
    id: 6, 
    title: 'Interactivity', 
    content: 'Facilitates interactive exploration of academic relationships through dynamic graphs and detailed article management, enhancing user engagement and research productivity.' 
  },
];


export default function Features() {

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Highlights</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {
              features.map((feature) => (
                <Feature key={feature.id} title={feature.title} content={feature.content} />
              ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}

interface FeatureProps {
  id: number;
  title: string;
  content: string;
}