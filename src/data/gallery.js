/**
 * Gallery & Archival Records for Falaky Foundation
 * Features authentic historical photographs, archival document scans, institutional landmarks,
 * and clearly marked illustrative historical context.
 */

export const galleryCategories = [
  "All Items",
  "Authentic Photographs",
  "Institutions & Landmarks",
  "Manuscripts & Calligraphy",
  "Continuing Legacy"
];

export const galleryItems = [
  {
    id: "gal-portrait-authentic-main",
    title: "Falaky Muhammed Moulavi (1913–1983)",
    category: "Authentic Photographs",
    authenticity: "AUTHENTIC_PORTRAIT",
    imageSrc: "/images/falaki_portrait_main.jpg",
    fullImageSrc: "/images/falaki_portrait_hd.jpg",
    year: "c. 1960s – 1970s",
    location: "Malabar / Palakkad, Kerala",
    caption: "Historical portrait of Falaky Muhammed Moulavi, scholar, educator, astronomer, and extempore Arabic poet.",
    source: "Historical Archives & Heritage Research Bureau",
    description: "Preserved in historical retrospectives of Malabar education. Shows Falaky Moulavi in traditional scholar's attire, reflecting the poise of Kerala's mid-twentieth-century educational era.",
    isFeatured: true
  },
  {
    id: "gal-portrait-authentic-article",
    title: "Archival Registry Portrait — Department of Public Instruction",
    category: "Authentic Photographs",
    authenticity: "AUTHENTIC_PORTRAIT",
    imageSrc: "/images/falaki_portrait_sharpened.jpg",
    fullImageSrc: "/images/falaki_portrait_authentic.jpg",
    year: "c. 1950s",
    location: "Kadirur / Kumaranellur, Kerala",
    caption: "Historical photograph featured in Dr. K.V. Veeran Moidheen's survey of Kerala's foremost Arabic poetic figures.",
    source: "Heritage Archives (Muslim Heritage India survey)",
    description: "Documents his years of service as an Arabic educator and school inspector in post-independence Malabar.",
    isFeatured: true
  },
  {
    id: "gal-jamalia-college",
    title: "Jamalia Arabic College, Perambur, Madras",
    category: "Institutions & Landmarks",
    authenticity: "HISTORICAL_ARCHIVE",
    imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    fullImageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=85",
    year: "Established 1898",
    location: "Perambur, Madras (Chennai), Tamil Nadu",
    caption: "Jamalia Arabic College, where Falaky Moulavi completed advanced studies under scholars Yusuf Kokan and Maulana Bukhari, earning Afzal-ul-Ulama from Madras University.",
    source: "Collegiate Historical Records of South Indian Arabic Education",
    description: "Jamalia was a premier center for higher Arabic studies in South India during the twentieth century, educating scholars from Malabar, Tamil Nadu, and Hyderabad.",
    isFeatured: false
  },
  {
    id: "gal-vazhakkad-darululoom",
    title: "Legacy of Chalilakath Kunhahammed Haji & Darul Uloom",
    category: "Institutions & Landmarks",
    authenticity: "HISTORICAL_ARCHIVE",
    imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    fullImageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
    year: "Early 20th Century",
    location: "Vazhakkad / Pattambi, Malabar",
    caption: "The educational reform movement started by Chalilakath Kunhahammed Haji, mentor and guide to Falaky Moulavi during his formative student years.",
    source: "Malabar Educational History Records",
    description: "Chalilakath modernized Arabic teaching methods in Kerala by introducing classroom boards, modern desks, organized textbooks, and astronomy into traditional Dars circles.",
    isFeatured: false
  },
  {
    id: "gal-astronomy-astrolabe",
    title: "Astronomy & Calendar Calculations (Ilm al-Falak)",
    category: "Manuscripts & Calligraphy",
    authenticity: "ILLUSTRATIVE_CONTEXT",
    imageSrc: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    fullImageSrc: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85",
    year: "Scientific Heritage",
    location: "Kerala Maritime & Astronomical Tradition",
    caption: "Illustrative representation of Islamic astronomy (Ilm al-Falak), the field in which both his grandfather Pokker Musliyar and Falaky Moulavi were well trained.",
    source: "Islamic Scientific Heritage Archive (Labeled Illustrative)",
    description: "Determining prayer times, lunar crescent sightings, and direction coordinates was historically done by scholars skilled in mathematics and spherical astronomy.",
    isFeatured: true
  },
  {
    id: "gal-calligraphy-manuscript",
    title: "Arabic Manuscript & Calligraphy",
    category: "Manuscripts & Calligraphy",
    authenticity: "ILLUSTRATIVE_CONTEXT",
    imageSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    fullImageSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=85",
    year: "Literary Preservation",
    location: "Kerala & South Indian Repositories",
    caption: "Illustrative representation of classical Arabic manuscript preservation, reflecting the style of verses and lesson notes written by Falaky Moulavi.",
    source: "Classical Manuscripts Archive (Labeled Illustrative)",
    description: "The literary archive of the Falaky Foundation is actively cataloguing handwritten notebooks and transcriptions of his extempore Arabic poetry.",
    isFeatured: false
  },
  {
    id: "gal-jabir-falaki-legacy",
    title: "Continuing Literary Legacy: Jabir Falaky (1945–2020)",
    category: "Continuing Legacy",
    authenticity: "HISTORICAL_ARCHIVE",
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    fullImageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85",
    year: "2011 – 2020",
    location: "Vilathur / University of Calicut",
    caption: "Author of 'Arabic Kavyasasthram' (2011) and son of Falaky Moulavi, Jabir Falaky carried forward the tradition of Arabic poetics and teaching into the modern era.",
    source: "Calicut University Arabic Studies Archive & Community Records",
    description: "Jabir Falaky taught in schools across Palakkad, continuing three generations of Arabic teaching and scholarship in the Falaky family.",
    isFeatured: false
  }
];
