import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute (value: string) {
    const folderNames = [
        'app',
        'entities',
        'features',
        'helpers',
        'pages',
        'shared',
        'widgets'
    ]

    return folderNames.some((folderName) => value.startsWith(folderName))
}
files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations()

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue()
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier('@/' + value)
        }
    })
})

project.save()
