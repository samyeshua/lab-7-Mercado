import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

enum EmailStatus {
    Verifying,
    Failed
}

@Component({ templateUrl: 'verify-email.component.html', standalone: false })
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        // Use queryParamMap subscription for more reliable token capture
        this.route.queryParamMap.pipe(first()).subscribe(params => {
            const token = params.get('token');

            // remove token from url to prevent http referer leakage
            this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

            if (token) {
                this.accountService.verifyEmail(token)
                    .pipe(first())
                    .subscribe({
                        next: () => {
                            this.alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true });
                            this.router.navigate(['../login'], { relativeTo: this.route });
                        },
                        error: () => {
                            this.emailStatus = EmailStatus.Failed;
                        }
                    });
            } else {
                this.emailStatus = EmailStatus.Failed;
            }
        });
    }
}