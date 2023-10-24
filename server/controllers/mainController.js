
exports.homepage = async(req,res) =>{
    const locals = {
        title: 'AppNotes',
        description: 'Free AppNotes'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    })
}

exports.about = async(req,res) =>{
    const locals = {
        title: 'About - AppNotes',
        description: 'Free AppNotes'
    }
    res.render('about',locals)
}