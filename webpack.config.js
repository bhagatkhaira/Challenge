const  path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { HotModuleReplacementPlugin } = require('webpack');

const PATH_SOURCE = path.join(__dirname,'./src');
const PATH_DIST =  path.join(__dirname,'./dist');

module.exports = env =>{
    const environment = env;
  const isProduction = environment.production ? true : false;
  const isDevelopment = environment.development ? true :false;
 
   return { 
       
    mode:environment,
  
    devServer: {
        watchContentBase: true,
        disableHostCheck: true,
        contentBase:  path.join(__dirname, '/dist'),
        host: 'localhost',
        port: 8086,
        historyApiFallback: true,
        open: true,
        hot:true
      },
    entry: [
        path.join(PATH_SOURCE,'./index.js')
    ],
    output : {
        path :PATH_DIST,
        filename:'js/[name].[fullhash].js',


    },  
    watchOptions: {
        poll: true,
        ignored: '/node_modules/',
      },
   
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets :[
                            ["@babel/preset-env",{
                               
                                useBuiltIns:'usage',
                                corejs:3, 
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }
            },
           
          
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localsConvention: 'camelCase',
                      sourceMap: true
                    }
                  }
                ]
              }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          
          template: path.join(__dirname, './Public/index.html'),
          
        }),
  
      
     
        
      ],
    
   
}
}



