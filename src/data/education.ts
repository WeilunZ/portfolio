export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
  logo?: string;
}

export const education: EducationItem[] = [
  {
    school: 'Shanghai Jiao Tong University',
    degree: 'Bachelor of Engineering in Electrical Engineering',
    location: 'Shanghai, China',
    startDate: 'Sep. 2015',
    endDate: 'Jun 2019',
    logo: 'https://upload.wikimedia.org/wikipedia/zh/thumb/d/d5/SJTU_emblem.svg/250px-SJTU_emblem.svg.png',
  },
];
