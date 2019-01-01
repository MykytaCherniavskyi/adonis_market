'use strict'

class AuthController {
    
    async index({ request, response }) {
        const ip = request.ip()
        const method = request.method()


        response.json({
            method,
            ip
        })
    }

    async login({request,response}) {
        const { user,email,password } = request.post()

        const requestData = {
            ip: request.ip(),
            method: request.method(),
            url: request.url(),
            headers: request.headers(),
        }

        response.json({
            user,
            email,
            password,
            requestData
        })
        // response.route('index')
    }

    async registrationPage() {

    }

    async registartion() {
        
    }
    
}

module.exports = AuthController
