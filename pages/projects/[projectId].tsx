import Navbar from 'components/Navbar';
import { Project } from 'components/Project';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ProjectPage = () => {
    const router = useRouter();
    const { projectId } = router.query;
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 'asdf123',
            name: 'Fabflix',
            shortDescription: 'An IMDb-like movie directory website',
            longDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi? Ducimus corrupti nisi perspiciatis nulla recusandae quaerat temporibus mollitia, veniam cumque nemo autem eveniet cum repudiandae dolor impedit nostrum? Cumque fuga dolore labore nihil obcaecati doloribus. Quia sint assumenda cupiditate, consequatur eligendi, corrupti dolore velit aspernatur sequi ullam mollitia voluptatum! `,
            stack: ['html5', 'css3', 'jquery', 'java', 'javascript'],
            images: ['https://www.jasonbugallon.com/assets/images/fabflix.png'],
            source: 'https://github.com/iSDestiny/Fabflix',
            live: 'https://github.com/iSDestiny/Fabflix'
        },
        {
            id: 'gbxcv123',
            name: 'MarkdownV',
            shortDescription:
                'Markdown notetaking web app with vim or vscode keybindings',
            longDescription: `
       I usually take all my notes using the code editor, Visual Studio Code, and store it all on github. The biggest reason why I take my notes this way is because of vscode's vim plugin. I prefer to do all of my writing with vim keybindings if it is possible and vscode's vim plugin makes that possible. I was looking for a project to work on in order to improve my skills and thought about the way that I took notes. I thought that it would be interesting to make a full stack web app of how I currently take notes so here I am.

I looked at several applications as references for MarkdownV. Specifically, I took vscode's material ui palenight theme and tried my best to replicate it with MarkdownV. I also used Notable, another markdown notetaking application, and Evernote, a rich text note taking application, as references for the design of my UI.
        `,
            stack: [
                'Typescript',
                'React',
                'Next',
                'SASS',
                'React Query',
                'Redux',
                'Node',
                'Next API Routes',
                'Mongodb',
                'JWT'
            ],
            images: [
                'https://i.imgur.com/5OuZY7r.png',
                'https://i.imgur.com/PNwUMpj.png',
                'https://i.imgur.com/WN2Hm6z.png',
                'https://i.imgur.com/UBMQdwy.png'
            ],
            source: 'https://github.com/iSDestiny/markdown-v',
            live: 'https://markdown-v.vercel.app/'
        }
    ]);

    return (
        <>
            <Navbar />
        </>
    );
};

export default ProjectPage;