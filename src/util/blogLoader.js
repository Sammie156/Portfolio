export const fetchAllBlogs = async () => {
    const modules = import.meta.glob('../content/*.md', {as: 'raw', eager: true});

    return Object.keys(modules).map((path) => {
        const id = path.split('/').pop().replace('.md', '');
        const content = modules[path];

        console.log(content);

        return {
            id,
            content,
            title: id.replace(/-/g, ' ').toUpperCase(),
        };
    });
};