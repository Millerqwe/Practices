const gnar = 'gnarly'

const info = ({file=__filename, dir=__dirname}) =>
    <p>
        {dir}: {file}
    </p>

switch(gnar) {
    default :
        console.log('gnarley')
        break
}

info('1', '2')